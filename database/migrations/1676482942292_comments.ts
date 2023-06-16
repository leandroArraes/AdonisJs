import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username')
      table.string('text')
      table.integer("moment_id").unsigned().references('moments.id').onDelete('CASCADE')

      // nesse caso estou dizendo que um momento pode ter varios comentarios mas os comentario só pode ter um momento
      // integer = inteiro 
      // cada comentario vai ter um id de momento 
      // .unsignet >> apenas numeros positivos para o moment_id
      // referenciando a tabela em .references('moments.id')
      // .onDelete('CASCADE') ao deletar um momento todos os comentários são apagados 

      

     

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
