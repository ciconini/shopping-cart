import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChild,
} from '@angular/core';

import { ForProductDirective } from '../../core/directives/for-product.directive';
import { Product } from '../../core/interfaces/product.interface';

@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class ProductsListComponent implements OnInit, AfterContentInit, AfterViewInit {
    @ViewChild(ForProductDirective, { read: ForProductDirective, static: true }) defaultTemplate: ForProductDirective;

    @ContentChildren(ForProductDirective, { read: ForProductDirective }) productContainers = new QueryList<ForProductDirective>();

    @Input() products: Product[];

    templates: { [type: string]: TemplateRef<any> } = {};

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.productContainers.forEach(container => {
            this.templates[container.forProductOfType] = container.template;
        });
    }

    ngAfterViewInit(): void {
    }

    getTemplate(product: Product): TemplateRef<any> {
        let template: TemplateRef<any>
        template = this.templates['default'];
        if (product.type) {
            template = this.templates[product.type];
        }

        return template;
    }

    getContext(product: Product) {
        return {
            $implicit: product,
        };
    }
}
