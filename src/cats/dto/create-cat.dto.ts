import { Transform } from 'class-transformer';
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @Transform(value => isNaN(+value) ? 0 : +value)
    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}