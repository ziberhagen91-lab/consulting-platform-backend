import { Body, Controller, Get, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { PrismaService } from '../prisma/prisma.service'

@Controller('auth')
export class AuthController {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Get('login')
  getLogin() {
    return {
      message: 'Login endpoint works 🚀',
    }
  }

  @Post('login')
  async login(@Body() body: any) {

    const email = body.email.trim().toLowerCase()
    const password = body.password.trim()

    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    })

    console.log(email)
    console.log(user)

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      }
    }

    if (user.passwordHash !== password) {
      return {
        success: false,
        message: 'Invalid password',
      }
    }

    const token = this.jwtService.sign({
      userId: user.id,
      email: user.email,
    })

    return {
      success: true,
      message: 'Login successful',
      token,
      user,
    }
  }

}