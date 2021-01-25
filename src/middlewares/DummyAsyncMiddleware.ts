import { Middleware, Next } from "@tsed/common";
import { IMiddleware } from "@tsed/common";
import { NextFunction } from "express";

@Middleware()
export class DummyAsyncMiddleware implements IMiddleware {
  use(@Next() next: NextFunction) {
    // Asynchronous call won't allow the file pass to the controller
    setTimeout(next, 1000);

    // Calling it directly will work fine
    // snext();
  }
}