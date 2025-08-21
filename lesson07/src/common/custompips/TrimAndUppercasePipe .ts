import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class TrimAndUppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== "string") {
      throw new BadRequestException("Invalid value for argument");
    }
    else {
      return value.trim().toUpperCase();
    }

  }
}