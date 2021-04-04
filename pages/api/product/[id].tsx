import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = _req
    if (isNaN(+id) || (Number(id) < 0)) {
        res.redirect('/');
        // А ты даже не тестировал redirect))?
        // При таком коде будет ошибка, да и даже по логике ты не блокируешь код далее после выполнения редиректа
        // Просто добавить return; надо
    }
    if (sampleUserData.find(api => api.id === Number(id))) {
        res.end(`Post: ${id}`)
    } else {
        res.redirect('/404');
    }
}

export default handler
