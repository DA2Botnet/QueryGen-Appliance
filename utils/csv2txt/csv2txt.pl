#!/usr/bin/perl
#
# Converts .csv files into .txt files
# Turns blank spaces into '+' to make the format consistent with the standard
# Removes the comma regex and lists each value line by line
#
# By Joseph Telaak

use strict;

# Input arguments
my $infile = $ARGV[0] or die;
my $outfile = $ARGV[1] or die;

# Open inputted file
open(my $data, '<', $infile) or die;
# Open outputted file
open(FH, '>', $outfile) or die;

while (my $line = <$data>) {
    # Split line
    chomp $line;
    my @words = split ", ", $line;  
  
    # Print words
    for my $word (@words) {    
        $word =~ s/["\s]//g;
        print FH "$word\n" if length($word);

    }
}

# Close
close(FH);
print "File written successfully!\n"