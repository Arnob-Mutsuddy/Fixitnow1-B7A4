
import "dotenv/config";
import { app } from "./app";

const port = Number(process.env.PORT) || 5000;

async function main() {
  try {
    const server= app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();