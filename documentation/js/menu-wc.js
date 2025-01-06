'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' : 'data-bs-target="#xs-controllers-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' :
                                            'id="xs-controllers-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' : 'data-bs-target="#xs-injectables-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' :
                                        'id="xs-injectables-links-module-AppModule-991002f9a20b4bc4f28a7fb8d7a0f6d7e30cb691b1e32d9725b88a112bc89bbef22014094ebf1c2afb7886448ebd529131e9ef6d7fc29dfd35c9f8e022b2a052"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' :
                                            'id="xs-controllers-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' :
                                        'id="xs-injectables-links-module-AuthModule-ce50048d249a20080f96ece1bc82fcb011d904e2abe2479aefcb5c8da70a99b455933795b1eaaf349bf0b6ffc1658c73eca7f68ebf92d6a3a0ccd9745c84ebb7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' :
                                            'id="xs-controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' :
                                        'id="xs-injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' :
                                            'id="xs-controllers-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' :
                                        'id="xs-injectables-links-module-UsersModule-0d8305023451c61797457b743b459114d87e615d6b7c23ab7d18cf862ac0f921ad8a0cfed29bfe34fe19d362b7f4521bdd813be7c41dd7916c35c1976078a3b0"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});