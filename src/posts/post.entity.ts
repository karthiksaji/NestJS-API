import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreatePostDto } from "./dtos/create-post.dto";
import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import { CreatePostMetaOptionsDto } from "src/meta-options/dtos/create-post-meta-options.dto";
import { text } from "stream/consumers";
import { MetaOption } from "src/meta-options/meta-option.entity";
import { User } from "src/users/user.entity";
import { Tag } from "src/tags/tag.entity";
@Entity()
export class Post{
@PrimaryGeneratedColumn()
id:number;

@Column({
    type:'varchar',
    length:512,
    nullable:false
})
title:string;

@Column({
    type:'enum',
    enum:postType,
    nullable:false,
    default:postType.POST
})
posttype:postType;

@Column({
    type:'varchar',
    length:256,
    nullable:false,
    unique:true,
})
slug:string;

@Column({
    type:'enum',
    enum:postStatus,
    nullable:false,
    default:postStatus.DRAFT,
})
status:postStatus;

@Column({
    type:'text',
    nullable:true,
})
content?:string;

@Column({
    type:'text',
    nullable:true,
})
schema?:string;

@Column({
    type:'varchar',
    length:1024,
    nullable:true,

})
featuredImageUrl:string;

@Column({
    type:'timestamp',
    nullable:true
})
publishOn?:Date;



@OneToOne(()=>MetaOption,(metaOptions)=>metaOptions.post,{
    cascade:true, //automatically add delete update 
    eager:true,
})

metaOptions?:MetaOption;

@ManyToOne(()=>User,(users)=>users.posts,{
    eager:true,
})
author:User  //here rely foreign key

//work on these later on
@ManyToMany(()=>Tag,(tags)=>tags.posts,{
    eager:true
})
@JoinTable()
tags?:Tag[];


}