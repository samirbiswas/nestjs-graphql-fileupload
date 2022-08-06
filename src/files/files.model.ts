import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field(() => Int)
  id: number;

  @Field()
  FileName?: string;

  // @Field()
  // lastName?: string;

  // @Field(() => Int, { nullable: true })
  // coverPhotoLength?: number = null;

  // @Field(() => String, { nullable: true })
  // coverPhoto?: string;

  // private _coverPhoto?: Buffer;
}
