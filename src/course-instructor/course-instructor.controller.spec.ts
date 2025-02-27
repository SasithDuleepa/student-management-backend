import { Test, TestingModule } from '@nestjs/testing';
import { CourseInstructorController } from './course-instructor.controller';
import { CourseInstructorService } from './course-instructor.service';

describe('CourseInstructorController', () => {
  let controller: CourseInstructorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseInstructorController],
      providers: [CourseInstructorService],
    }).compile();

    controller = module.get<CourseInstructorController>(CourseInstructorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
