import { text } from "stream/consumers";
import { Column,ManyToMany, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { Post } from "src/posts/post.entity";

@Entity()
export class Tag{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:256,
        nullable:false,
        unique:true,
    })
    name:string;

    @Column({
        type:'varchar',
        length:256,
        nullable:false,
        unique:true,
    })
    slug:string;

    @Column({
        type:'text',
        nullable:true,
    })
    description:string;

    @Column({
        type:'text',
        nullable:true,
    })
    schema:string;

    @Column({
        type:'varchar',
        length:1024,
        nullable:true,
    })
    featureImageUrl:string;

    @ManyToMany(()=>Post,(post)=>post.tags,{
        onDelete:'CASCADE',
    })
      posts=Post;

    @CreateDateColumn()
    createDate:Date;

    @UpdateDateColumn()
    updateDate:Date;

    @DeleteDateColumn()
    deletedAt:Date;


}