import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseInstructorDto } from './create-course-instructor.dto';

export class UpdateCourseInstructorDto extends PartialType(CreateCourseInstructorDto) {}
