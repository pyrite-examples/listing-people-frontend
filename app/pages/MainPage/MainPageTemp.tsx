import { Sidebar, AddForm, Table } from '../../components';
import { Render } from "pyrite";
import { MainPage } from "./MainPageComp";

export function MainPageTemplate (this: MainPage) {
	return (
		<div>
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div class="col-xs-12">
                    <AddForm 
                        title="Add new person" 
                        onCreate={this.addPerson.bind(this)}
                        fields={this.fields}
                        titleSubmit="Add">
                    </AddForm>
                    {(this.people.length) ? <Table 
                        elements={this.people} 
                        cols={this.cols} 
                        titles={this.titleCols}
                        onDelete={this.deletePerson.bind(this)}
                        orderCols={this.orderCols.bind(this)}>
                    </Table> : null}
                </div>
                <div class="col-xs-12 btn-group">
                    <a href="#!/list/superPower" class="btn btn-primary">Super Power</a>
                    <a href="#!/list/rich" class="btn btn-primary">Rich</a>
                    <a href="#!/list/genius" class="btn btn-primary">Genius</a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar elements={this.people}></Sidebar>
            </div>
        </div>
	);
}