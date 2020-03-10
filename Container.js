import React, {Component} from 'react';
import SearchById from './SearchById';
import Results from './Results';

class Container extends Component {

    state = {
        ids: [],
        loaded: false,
        patient: null,
        name:null,
        age: null
    };
     searchFunc = async (q) =>{
        console.log(' search q ', q );
        const url = `http://LOCALHOST:4008/api/age?id=${q}`;
        try{
            const  response = await fetch(url);
            console.log(' search response ', response );
            const person = await response.json();
            console.log(' search response person', person );

            this.setState({
                patient : person.id,
                name: person.name,
                age: person.age,
                loaded: true
            },()=> console.log('searchFunc state updated', this.state));


        }
        catch (e) {
            this.setState({
                patient : null,
                name: null,
                age: null,
                loaded: false
            },()=> console.log('searchFunc state updated', this.state));

            console.log("error", e);
            window.alert("an error has occurred please try your search again ");

        }



    };


    loadIds = async ( ) =>{


        const url = `http://LOCALHOST:4008/api/ids`;
        try{
            const  response = await fetch(url);
            console.log(' ids response ', response );
            const ids = await response.json();
            console.log(' id response person', ids );
            this.setState({
                ids: ids,
                loaded: true
            });

        }
        catch (e) {

            this.setState({
                ids: [],
                loaded: false
            });
            console.log("error", e);
            window.alert("an error has occurred please refresh the page ");

        }


    };
    componentWillMount() {
        this.loadIds();

    }


    render() {
        return (
            <div>
              <SearchById info={ {
                  suggestions: this.state.ids,
                  search: this.searchFunc,

              }
              }/>
              <Results name={this.state.name} patient={this.state.patient} age={this.state.age}/>

            </div>
        );
    }
}

Container.propTypes = {};

export default Container;
