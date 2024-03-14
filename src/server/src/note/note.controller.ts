import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ReqUser } from './../auth/decorator';
import { JwtAuthGuard } from './../auth/guard';
import { NoteService } from './note.service';
import { CreateNoteDto, UpdateNoteDto } from './dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  createNote(@ReqUser('id') userId: number, @Body() dto: CreateNoteDto) {
    return this.noteService.createNote(userId, dto);
  }

  @Get(':noteId')
  getNote(
    @ReqUser('id') userId: number,
    @Param('noteId', ParseIntPipe) noteId: number,
  ) {
    return this.noteService.getNote(userId, noteId);
  }

  @Get()
  getNotes(@ReqUser('id') userId: number) {
    return this.noteService.getNotes(userId);
  }

  @Put(':noteId')
  updateNote(
    @ReqUser('id') userId: number,
    @Param('noteId', ParseIntPipe) noteId: number,
    @Body() dto: UpdateNoteDto,
  ) {
    return this.noteService.updateNote(userId, noteId, dto);
  }

  @Delete(':noteId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteNote(
    @ReqUser('id') userId: number,
    @Param('noteId', ParseIntPipe) noteId: number,
  ) {
    return this.noteService.deleteNote(userId, noteId);
  }
}
