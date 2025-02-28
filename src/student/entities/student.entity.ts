import { Enrollment } from 'src/enrollment/entities/enrollment.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    dob: Date;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
    enrollment: Enrollment[];
}
