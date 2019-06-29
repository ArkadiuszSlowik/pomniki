from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)
pomniki = pd.read_excel('/home/arkadiusz/Pulpit/pomniki/pomniki.xlsx',
                        usecols=['NAZWA','RODZAJ_POMNIKA_HISTORII', 'DATA_WPISU', 'E', 'N','image_paths'])

pomniki.columns = ['name','type', 'date_of_entry', 'longitude', 'latitude','image_paths']

def df_to_geojson(df, properties, lat='latitude', lon='longitude'): #Convert data to geojson
    geojson = {'type':'FeatureCollection', 'features':[]}
    for _, row in df.iterrows():
        feature = {'type':'Feature',
                   'properties':{},
                   'geometry':{'type':'Point',
                               'coordinates':[]}}
        feature['geometry']['coordinates'] = [row[lon],row[lat]]
        for prop in properties:
            feature['properties'][prop] = row[prop]
        geojson['features'].append(feature)
    return geojson

mygeojson= df_to_geojson(pomniki,['name','type','date_of_entry','image_paths'],)

''' Create Geojson
output_filename = 'dataset.js'
with open(output_filename, 'w') as output_file:
    output_file.write('var dataset = ')
    json.dump(mygeojson, output_file, indent=2)
'''
#Flask app settings
@app.route('/')
def hello(name=None):
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(host='0.0.0.0')