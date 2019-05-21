import sys


def latlonToPrecents():
    n = sys.argv[1]
    e = sys.argv[2]
    t = (35-50) / (42.359 - 16.870) * (float(n) - 16.870) + 50
    l = (50-27) / (11.053 + 71.531) * (float(e) - 11.053) + 50
    return (t, l)


print(latlonToPrecents())
