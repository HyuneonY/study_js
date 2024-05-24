// routes/goods.js

import express from 'express';

// Express.js의 라우터를 생성합니다.
const router = express.Router();

// 1. mongoose
import mongoose from 'mongoose';
import Goods from '../schemas/goods.js';

// 2. API를 구현한다.
router.post('/goods', async (req, res) => {
    // 3. 클라이언트로 부터 전달받은 데이터를 가져온다.
    // goodsId, name, thumbnailUrl, category, price
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    // 4. goodsId 중복되지 않았는지 검사한다. -> 실제로 MongoDB에 데이터를 조회해서, 해당하는 데이터가 MongoDB에 존재하는지 확인한다.
    const goods = await Goods.find({ goodsId: goodsId }).exec(); // 데이터를 생성할 때는 사용이 안되기 때문에, 데이터를 조회할 대 사용한다.

    // 4-1. 만약, goodsId가 중복된다면, 에러메시지를 전달한다.
    if (goods.length) {
        return res.status(400).json({ errorMessage: '이미 존재하는 데이터입니다.' });
    }

    // 5. 상품(Goods)를 생성한다.
    const CreatedGoods = await Goods.create({
        goodsId: goodsId,
        name: name,
        thumbnailUrl: thumbnailUrl,
        category: category,
        price: price,
    });

    // 6. 생성된 상품 정보를 클라이언트에게 응답(Response)반환 한다.
    return res.status(201).json({ goods: CreatedGoods });

})

// 3. 클라이언트로 부터 전달받은 데이터를 가져온다.

export default router;

