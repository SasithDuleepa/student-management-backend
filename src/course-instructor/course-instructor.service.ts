import { Injectable } from '@nestjs/common';
import { CreateCourseInstructorDto } from './dto/create-course-instructor.dto';
import { UpdateCourseInstructorDto } from './dto/update-course-instructor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseInstructor } from './entities/course-instructor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseInstructorService {
  constructor(
    @InjectRepository(CourseInstructor)
    private readonly corseInstructorRepository: Repository<CourseInstructor>,
  ) { }

  async create(createCourseInstructorDto: CreateCourseInstructorDto) {
    return await this.corseInstructorRepository.save(createCourseInstructorDto);
  }

  async findAll() {
    return await this.corseInstructorRepository.find();
  }

  async findOne(id: number) {
    return await this.corseInstructorRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateCourseInstructorDto: UpdateCourseInstructorDto,
  ) {
    const courseInstructor = await this.corseInstructorRepository.findOne({
      where: { id: id },
    });
    if (!courseInstructor) {
      throw new Error('Course instructor ont found');
    }
    Object.assign(courseInstructor, updateCourseInstructorDto);
    return this.corseInstructorRepository.save(courseInstructor);
  }

  async remove(id: number) {
    return await this.corseInstructorRepository.delete(id);
  }
}
