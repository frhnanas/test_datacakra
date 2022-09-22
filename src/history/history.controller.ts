import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import e, { Request, Response } from 'express';
import { AppService } from 'src/app.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { HistoryInterface, HistoryService } from './history.service';
interface CreateHistory {
    idHistory: number,
    idUser: number,
    tanggalMulaiPerjalanan: Date,
    tanggalBerakhirPerjalanan: Date,
    destinasiPerjalanan: number,
  }
  @Controller('history')
  export class HistoryController {
  constructor(private historyService: HistoryService,
    private readonly userService: UserService) {}
  @Post()
    async create(@Body() createHistory: CreateHistory, @Req() req: Request) {
        try{
            if(createHistory.idUser){
                const cek = await this.userService.find({idUser: createHistory.idUser})
                if(!cek){
                    throw new BadRequestException('user tidak ditemukan')
                }else{
                    await this.historyService.create(createHistory)
                }
            }else{
                throw new BadRequestException('parameter salah')
            }
        }catch(e){
            return console.log('error')
        }
      
    }
  @Get()
    async findAll(@Req() request: Request) {
      const history: Array<HistoryInterface> = await this.historyService.findAll()
      return history
    }
  @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        await this.historyService.update(id, body)
        return "data terubah"
    }
  @Delete(':id')
    async remove(@Param('id') id: string) {
      await this.historyService.delete(id)
      return "data terhapus"
    }
  }