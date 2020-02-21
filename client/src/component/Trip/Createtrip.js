import React, {Component} from 'react';
import { Label, Input } from 'reactstrap';

export default class Createtrip extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render()
    {
        return(
            <section id="new-property">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-sm-9 col-md-9">

                            <div class="info-block" id="basic">
                                <div class="section-title line-style no-margin">
                                    <h3 class="title">Les informations de base concernant le voyage</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-5 space-form">
                                        <input id="title" class="form-control" type="text" placeholder="Title" name="title"/>
                                    </div>
                                    <div class="col-md-7 space-form">
                                        <input id="address" class="form-control" type="text" placeholder="Address" name="address"/>
                                    </div>
                                    <div class="col-md-12">
                                        <textarea name="description" id="description" placeholder="Veuillez saisir la description de votre voyage" 
                                        class="form-control description"></textarea>
                                    </div>
                                    <div class="col-md-5 space-form">
                                    <Label for="exampleDate">Date de début</Label>
                                        <Input type="date" name="date" id="exampleDate" placeholder="date de début"/>
                                    </div>
                                    <div class="col-md-5 space-form">
                                    <Label for="exampleDate">Date de fin</Label>
                                        <Input type="date" name="date" id="exampleDate" placeholder="date de fin"/>
                                    </div>
                                </div>
                            
                            </div>
                            <div class="info-block" id="summary">
                                <div class="section-title line-style">
                                    <h3 class="title">Plus de détails</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 space-form">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">Achat/Location</option>
                                            <option value="rent">Location</option>
                                            <option value="sell">Achat</option>                        
                                        </select>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">Type de logement</option>
                                            <option value="apartments">Appartement</option>
                                            <option value="condos">Hôtel</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="houses">Villa</option>
                                            <option value="offices">Tente</option>
                                            <option value="retail">Auberge de jeunesse</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input class="form-control" type="text" name="bathroom" id="bathroom" data-text="Bathroom" placeholder="Age moyen"/>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input class="form-control" type="text" name="bedroom" id="bedroom" data-text="Bedroom" placeholder="Nombre de personnes" />
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input id="periodic-price" class="form-control" type="text" placeholder="Prix" name="periodic-price" />
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input id="pays" class="form-control" type="text" placeholder="Pays" name="pays" />
                                    </div>
                                </div>
                            </div>
                            <div class="info-block" id="images">
                                <div class="section-title line-style">
                                    <h3 class="title">Images</h3>
                                </div>
                                <form action="./upload.php" method="post" class="dropzone"></form>
                                <span class="text">
                                    <strong>Drop files</strong> here or <strong>click</strong> to upload.<br />
                                </span>
                            </div>
                            <div class="section-title space-form">
                            <button className="btn btn-default button-form"  type="submit">Poster le voyage</button>
                            </div>
                </div>
            </div>
        </div>
		</section>
        )
    }
}