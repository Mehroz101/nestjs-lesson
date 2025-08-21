import { BadRequestException, Injectable } from '@nestjs/common';
import validateJson from "./validated-address.json"
@Injectable()
export class AppService {
  private readonly SMARTY_AUTH_ID = 'f1583832-67a6-1bce-85d0-4d61d02514ba';
  private readonly SMARTY_AUTH_TOKEN = 'TSK7FYUS9oInlwMliG5g';

  async validateAddress(
    street: string,
    city: string,
    state: string,
    zipcode: string,
  ): Promise<{ success: boolean; message: string; data: any }> {
    const baseUrl = 'https://us-street.api.smarty.com/street-address';

    const queryParams = new URLSearchParams({
      'auth-id': this.SMARTY_AUTH_ID,
      'auth-token': this.SMARTY_AUTH_TOKEN,
      street,
      city,
      state,
      zipcode,
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        return {
          success: false,
          message: 'Invalid address provided.',
          data: null,
        };
      }

      return {
        success: true,
        message: 'Address validated successfully.',
        data: data[0],
      };
    } catch (error) {
      throw new BadRequestException('Address validation failed.');
    }
  }
}
