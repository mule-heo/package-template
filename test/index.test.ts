import { hello } from "@/index.js";
import { describe, it, expect } from "vitest";

describe("hello", () => {
  it("should be defined", () => {
    expect(hello).toBeDefined();
  });
});
