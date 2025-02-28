import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) { }
  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOne({ where: { id: id } });

    if (!student) {
      throw new Error('Student not found');
    }
    Object.assign(student, updateStudentDto);
    return await this.studentRepository.save(student);
  }

  async remove(id: number) {
    return await this.studentRepository.delete(id);
  }
}

