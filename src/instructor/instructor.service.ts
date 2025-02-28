import { Injectable } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Instructor } from './entities/instructor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,
  ) { }
  async create(createInstructorDto: CreateInstructorDto) {
    return await this.instructorRepository.save(createInstructorDto);
  }

  async findAll() {
    return await this.instructorRepository.find();
  }

  async findOne(id: number) {
    return await this.instructorRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateInstructorDto: UpdateInstructorDto) {
    const instructor = await this.instructorRepository.findOne({
      where: { id: id },
    });
    if (!instructor) {
      throw new Error('Instructor not found');
    }
    Object.assign(instructor, updateInstructorDto);
    return await this.instructorRepository.save(instructor);
  }

  async remove(id: number) {
    return await this.instructorRepository.delete(id);
  }
}
