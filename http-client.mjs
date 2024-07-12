import https from "https";

const endpoint = "https://eolaymgcj7dsflz.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Received data: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Choirul",
  lastName: "Chuluq",
});

request.write(body);
request.end();
