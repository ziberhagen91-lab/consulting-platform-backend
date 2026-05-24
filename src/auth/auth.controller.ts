import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const token = this.authService.generateToken({
      email: body.email,
    })

    return {
      accessToken: token,
    }
  }

  @Post('register')
  async register(@Body() body: any) {
    const passwordHash = await this.authService.hashPassword(
      body.password,
    )

    return {
      email: body.email,
      passwordHash,
    }
  }
}