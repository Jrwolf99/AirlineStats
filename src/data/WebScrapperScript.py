

import pandas
tables_on_page = pandas.read_html(
    "./data/fuel1.html")
table = tables_on_page[0]
table.to_json("fuel.json", index=False, orient='table')
