import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?type=fast -> [ ... ]
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ id: 1, name: 'ninja1', type }];
  }

  // GET /ninjas/:id -> { ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT /ninjas/:id -> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return { id, name: updateNinjaDto.name };
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return { id };
  }
}
