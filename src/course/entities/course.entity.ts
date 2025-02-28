import { CourseInstructor } from 'src/course-instructor/entities/course-instructor.entity';
import { Enrollment } from 'src/enrollment/entities/enrollment.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    credits: number;

    @OneToOne(() => CourseInstructor)
    @JoinColumn()
    courseInstructor: CourseInstructor;

    @ManyToMany(() => Enrollment)
    @JoinColumn()
    enrollment: Enrollment;
}
