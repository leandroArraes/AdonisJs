import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {


    public async store({ request, response, params }: HttpContextContract ){
        const body = request.body()
        const momentId = params.momentId
        await Moment.findOrFail(momentId)
        body.momentId = momentId
        const comment= await Comment.create(body)
        response.status(201)
        return{
            message: 'comentário adicionado com sucesso !',
            data : comment,
            }
        }

    public async index(){

        const comment = await Comment.query()
        
        return{
            data: comment,
        }
    }

    public async show({ params }: HttpContextContract){
        
        const comment = await Comment.findOrFail(params.id)

        
         
        return{
            data: comment,
        }

    }


    public async destroy({params}: HttpContextContract){
        const comment = await Comment.findOrFail(params.id)
        await comment.delete()

        return{
            message: "Comentario excluído com sucesso !",
            data: comment,
        }
    }


}
