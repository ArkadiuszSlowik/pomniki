import pandas as pd #Check unique categories in the set
pomniki=pd.read_excel('/home/arkadiusz/Pulpit/pomniki/pomniki.xlsx')
print(pomniki['RODZAJ_POMNIKA_HISTORII'].unique())