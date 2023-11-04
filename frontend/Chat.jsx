import { useState } from "react";
import "./App.css";
import { useFetch } from "@gadgetinc/react";

export const Chat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [reply, setReply] = useState("");
  const [productRecommendations, setProductRecommendations] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [{ data, fetching, error }, sendChat] = useFetch("/chat", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    stream: true,
  });

  return (
    <section>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setReply("");
          setProductRecommendations(null);
          setErrorMessage("");

          const stream = await sendChat({
            body: JSON.stringify({ message: userMessage }),
          });

          const decodedStreamReader = stream
            .pipeThrough(new TextDecoderStream())
            .getReader();

          // handle any stream errors
          decodedStreamReader.closed.catch((error) => {
            setErrorMessage(error.toString());
          });

          let replyText = "";
          let done = false;
          while (!done) {
            const { value, done: doneReading } =
              await decodedStreamReader.read();

            done = doneReading;

            // handle the recommended products
            if (value?.includes(`{"products":`)) {
              setProductRecommendations(JSON.parse(value));
            } else if (value) {
              replyText = replyText + value;
              replyText = replyText.replace('"', "").replace(",", "");
              setReply(replyText);
            }
          }
        }}
      >
        <textarea
          placeholder="Ask a question about this shop's products ...."
          value={userMessage}
          onChange={(event) => setUserMessage(event.currentTarget.value)}
        />
        <input type="submit" value="Ask" disabled={fetching} />
      </form>
      <br />

      {errorMessage && (
        <section>
          <pre>
            <code>{errorMessage}</code>
          </pre>
        </section>
      )}

      {reply && (
        <section>
          <p>{reply}</p>
          <br />
          <div>
            {productRecommendations?.products ? (
              productRecommendations.products.map((product, i) => (
                <a
                  key={`${i}_${product.title}`}
                  href={
                    "https://" +
                    product.shop.domain +
                    "/products/" +
                    product.handle
                  }
                  target="_blank"
                >
                  {product.title}
                  {product.images.edges[0] && (
                    <img
                      style={{ border: "1px black solid" }}
                      width="200px"
                      src={product.images.edges[0].node.source}
                    />
                  )}
                </a>
              ))
            ) : (
              <span>Loading recommendations...</span>
            )}
          </div>
        </section>
      )}
      {fetching && <span>Thinking...</span>}
      {error && <p className="error">There was an error: {String(error)}</p>}
    </section>
  );
};
