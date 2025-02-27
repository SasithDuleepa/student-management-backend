import { Test, TestingModule } from '@nestjs/testing';
import { CourseInstructorService } from './course-instructor.service';

describe('CourseInstructorService', () => {
  let service: CourseInstructorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseInstructorService],
    }).compile();

    service = module.get<CourseInstructorService>(CourseInstructorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
