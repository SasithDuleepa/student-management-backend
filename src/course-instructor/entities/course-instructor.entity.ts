import { Course } from 'src/course/entities/course.entity';
import { Instructor } from 'src/instructor/entities/instructor.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseInstructor {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Instructor, (instructor) => instructor.courseInstructor)
    @JoinColumn()
    instructor: Instructor;

    @OneToOne(() => Course, (course) => course.courseInstructor)
    @JoinColumn()
    course: Course;
}
