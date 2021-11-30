import os
import csv
import random

queries = []

for file in os.listdir(os.getcwd()):
    print(file)
    if file != 'mix-queries.py' and file != 'partitioned':
        with open(os.path.join(os.getcwd(), file), 'r') as f:
            file = csv.reader(f)
            try:
                for line in file:
                    queries.append(line[1].replace(' ','+') + '\n')
            except:
                pass

random.shuffle(queries)

partition_size = 2000 # number of queries per file
path = '' # folder path for partitioned files

num_partitions = len(queries) // partition_size

for i in range(num_partitions):
    with open(path + rf'\queries_{i}.txt', 'w') as f:
        f.writelines(queries[i * partition_size : (i + 1) * partition_size])
