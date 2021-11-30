## Query Creation
Creates queries from a list of words, using google's query suggestions
(thanks https://github.com/sundios/Keyword-generator-SEO/)

### suggestqueries.py
generates the queries for each term inputted as a csv file, and saves all csv files to a folder

### mix-queries.py
reads all of the queries from the csv files into memory, shuffles them, and outputs them into a number of partitioned txt files
