import os
import random

f_list = os.listdir("./hard/")


wav_list = []
for f in f_list:
	idx = f.split('.')[0]
	if idx not in wav_list:
		wav_list.append(idx)

random.shuffle(wav_list)
print(wav_list)