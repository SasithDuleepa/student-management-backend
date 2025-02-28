import { CourseInstructor } from 'src/course-instructor/entities/course-instructor.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instructor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    department: string;

    @OneToOne(
        () => CourseInstructor,
        (courseInstructor) => courseInstructor.instructor,
    )
    courseInstructor: CourseInstructor;
}
