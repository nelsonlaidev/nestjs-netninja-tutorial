import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninja1', weapon: 'stars' },
    { id: 2, name: 'ninja2', weapon: 'sword' },
  ];

  getNinjas(weapon?: 'stars' | 'sword') {
    if (weapon) {
      return this.ninjas.filter((n) => n.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((n) => n.id === id);

    if (!ninja) {
      throw new Error('Ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: this.ninjas.length + 1,
    };

    this.ninjas.push(newNinja);

    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((n) => {
      if (n.id === id) {
        return { ...n, ...updateNinjaDto };
      }
      return n;
    });

    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const ninja = this.getNinja(id);

    this.ninjas = this.ninjas.filter((n) => n.id !== id);

    return ninja;
  }
}
