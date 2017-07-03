<template>
  <div class="coordinates">
    <div class="container">
  
      <div class="Header">
        <h1>Погодный информер</h1>
      </div>
  
      <fieldset>
        <legend>Выберите точку земного шара</legend>
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInput">Latitude</label>
          <input type="text" v-model="coordinates.latitude" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Долгота">
  
          <label class="sr-only" for="inlineFormInputGroup">Longitude</label>
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" v-model="coordinates.longitude" class="form-control" id="inlineFormInputGroup" placeholder="Широта">
          </div>
  
          <button v-on:click="greet" class="btn btn-primary">Найти</button>
          {{coordinates}}
  <aside class="PullQuote">
    <img src="../assets/open.png"> Погода не отвечает за выполнение прогнозов погоды. Мы тоже...
    <img src="../assets/close.png">
  
  </aside>
        </form>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Использовать геолокацию</label>
      </fieldset>


      <table class="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>28.06</th>
            <th>29.06</th>
            <th>30.06</th>
            <th>31.06</th>
            <th>1.07</th>
            <th>2.07</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Зональная составляющая скорости ветра на высоте 10 м (м/c)</th>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
            <td>{{information.WindZonal}}</td>
          </tr>
          <tr>
            <th scope="row">Меридиональная составляющая скорости ветра на высоте 10 м (м/c)</th>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
            <td>{{information.WindMeridional}}</td>
          </tr>
          <tr>
            <th scope="row">Атмосферное давление на подстилающей поверхности (ГПа)</th>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
            <td>{{information.AtmosphericPressure}}</td>
          </tr>
          <tr>
            <th scope="row">Относительная влажность на высоте 2 м</th>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
            <td>{{information.Humidity}}</td>
          </tr>
          <tr>
            <th scope="row">Интенсивность выпадения осадков (мм/час)</th>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
            <td>{{information.Rainfall}}</td>
          </tr>
          <tr>
            <th scope="row">Температура подстилающей поверхности (C)</th>
            <td>{{information.TemperatureSurface}}</td>
          </tr>
          <tr>
            <th scope="row">Температура воздуха на высоте 2 м (C)</th>
            <td>{{information.AirTemperature}}</td>
          </tr>
        </tbody>
      </table>
  
      <div class="Footer">
        <p class="Disclaimer">Данные предоставлены группой Vladan и Co </p>
        <p>Copyright © ComputePractice2017</p>
      </div>
  
    </div>
  </div>
</template>

<<script>
export default {
  name: 'coordinates',
  data () {
    return {
      coordinates: {
        'latitude': '',
        'longitude': ''
      },
      information: {
        'WindZonal': '-2.3',
        'WindMeridional': '-9.1',
        'AtmosphericPressure': '682',
        'Humidity': '100',
        'Rainfall': '0',
        'TemperatureSurface': '-53.3',
        'AirTemperature': '-52.1'
      }
    }
  },

  methods: {
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('Привет, ' + this.name + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<style>
.form-inline {
  margin-top: 0px;
  margin-bottom: 10px;
}

.Header {
  background-color: #6495ED;
  color: #ffe;
  border: thin #C0C0C0 solid;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

fieldset {
  color: #000000;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  color: #ffe;
  padding: 4px;
  border: 1px solid #C0C0C0;
}

th {
  background: #6495ED;
  color: #ffe;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
}


.Footer {
  color: #000000;
  text-align: center;
  font-size: small;
  position: fixed; 
  left: 40%; bottom: 0; 
  padding: 10px; 
}

.Footer .Disclaimer {
  color: #000000;
  font-style: italic;
}

.Footer p {
  margin: 3px;
}

body {
  background-color: #F0FFFF;
  background-color: transparent;
  background-image: url("../assets/bg.jpg");
}

aside {
  float: right;
  max-width: 300px;
  border-top: thin black solid;
  border-bottom: thin black solid;
  font-size: 20px;
  line-height: 130%;
  font-style: italic;
  padding-top: 5px;	
  padding-bottom: 2px;	
  margin-left: 15px;
  margin-bottom: 10px;
}

aside img {
  width:40px;
  height:30px;
  vertical-align: bottom;
}
</style>
