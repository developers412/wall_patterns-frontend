# python separate_by_size.py -f="Masters/Gemma"

import numpy as np
import cv2
import time
import argparse
import os


def generate(folder_name):

    sizes = []
    counts= []

    for filename in os.listdir(folder_name):
        img = cv2.imread(os.path.join(folder_name,filename))
        if(img is not None and img.shape[0] == img.shape[1]):
            img_height = img.shape[0]
            img_width = img.shape[1]
            img_size = [img_height, img_width]
            if(img_size not in sizes):
                os.mkdir(folder_name + '/' + str(img_height) + 'X' + str(img_width))
                sizes.append(img_size)
                counts.append(1)
            else:
                counts[sizes.index(img_size)] += 1

            img_name = folder_name + '/' + str(img_height) + 'X' + str(img_width) + '/' + str(counts[sizes.index(img_size)]) + '.jpg'
            cv2.imwrite(img_name,img)






if __name__ == "__main__":
    text = 'This is a program for walls tiling patterns'
    parser = argparse.ArgumentParser(description = text)
    parser.add_argument("-f", "--folder", help="folder name")
    args = parser.parse_args()

    f_namme = args.folder
    generate(f_namme)
