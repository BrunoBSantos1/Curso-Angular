import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html'
})
export class ListarProdutoComponent implements OnInit {

  constructor( private produtoService: ProdutoService){ }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProduto()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos)
      },
      error=> console.log(error)
    )
  }
  

}
