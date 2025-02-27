import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    return await this.adminRepository.save(createAdminDto);
  }

  async findAll() {
    return await this.adminRepository.find();
  }

  async findOne(id: number) {
    return await this.adminRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    //find
    const admin = await this.adminRepository.findOne({ where: { id: id } });
    if (!admin) {
      throw new Error('Admin not found');
    }
    Object.assign(admin, updateAdminDto);

    return await this.adminRepository.save(admin);
  }

  remove(id: number) {
    return this.adminRepository.delete(id);
  }
}
