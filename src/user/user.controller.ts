import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from 'src/app.service';
import { UserInterface, UserService } from './user.service';
interface CreateUser {
  idUser: number,
  username: string,
  password: string,
  role: number,
}
@Controller('user')
export class UserController {
constructor(private userService: UserService) {}
@Post()
  async create(@Body() createUser: CreateUser) {
    const user = await this.userService.create(createUser);
    if(!user) {
      return 'error'
    }
    return 'data terbuat'
  }
@Get()
  async findAll(@Req() request: Request) {
    const user: Array<UserInterface> = await this.userService.findAll()
    return user
  }
@Put(':id')
  async update(@Param('idUser') idUser: string, @Body() body: any) {
    await this.userService.update(idUser, body)
    return "data terubah"
  }
@Delete(':idUser')
  async remove(@Param('idUser') idUser: string) {
    await this.userService.delete(idUser)
    return "data terhapus"
  }
}