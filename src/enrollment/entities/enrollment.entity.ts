import { Course } from "src/course/entities/course.entity";
import { Student } from "src/student/entities/student.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enrollment {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, (student) => student.enrollment, { cascade: true })
    student: Student;

    // @ManyToMany(() => Course)
    // @JoinColumn()
    // course: Course;

}
