// src/routes/posts.router.js

import express from 'express';
import { prisma } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

/** 게시글 생성 API **/
router.post('/posts', authMiddleware, async (req, res, next) => {
  const { userId } = req.user;
  const { title, content } = req.body;

  const post = await prisma.posts.create({
    data: {
      UserId: userId,
      title,
      content,
    },
  });

  return res.status(201).json({ data: post });
});

/** 게시글 목록 조회 API **/
router.get('/posts', async (req, res, next) => {
    const posts = await prisma.posts.findMany({
      select: {
        postId: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc', // 게시글을 최신순으로 정렬합니다.
      },
    });
  
    return res.status(200).json({ data: posts });
  });
  
export default router;