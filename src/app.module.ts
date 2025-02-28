import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { InstructorModule } from './instructor/instructor.module';
import { CourseInstructorModule } from './course-instructor/course-instructor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './config/dbConfig';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    AdminModule,
    StudentModule,
    CourseModule,
    InstructorModule,
    CourseInstructorModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
