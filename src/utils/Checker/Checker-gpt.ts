type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<keyof T, string> };

export class Checker<T extends Record<string, any>> {
  private raw: any;
  private validatedData: T | null = null;

  constructor(raw: any) {
    this.raw = raw;
  }

  check(schema: { [K in keyof T]: "string" | "number" | "boolean" }): ValidationResult<T> {
    const errors = {} as Record<keyof T, string>;

    for (const key in schema) {
      const expectedType = schema[key];
      const value = this.raw[key];

      if (typeof value !== expectedType) {
        errors[key] = `Campo '${key}' deve ser do tipo '${expectedType}', mas recebeu '${typeof value}'`;
      }
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    this.validatedData = this.raw as T;
    return { success: true, data: this.validatedData };
  }

  get(): T {
    if (!this.validatedData) {
      throw new Error("Dados ainda não foram validados. Chame .check() antes de .get().");
    }
    return this.validatedData;
  }
}
